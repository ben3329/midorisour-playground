import React, {memo, type ReactNode} from 'react';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogSidebar/Content';
import type {BlogSidebarItem} from '@docusaurus/plugin-content-blog';

type TreeNode = {
  dirs: Map<string, TreeNode>;
  posts: BlogSidebarItem[];
};

function buildTree(items: BlogSidebarItem[]): TreeNode {
  const root: TreeNode = {dirs: new Map(), posts: []};

  items.forEach((item) => {
    const permalink = item.permalink.split('#')[0].split('?')[0];
    const parts = permalink.split('/').filter(Boolean);
    const blogIndex = parts.indexOf('blog');
    const segments = (blogIndex >= 0 ? parts.slice(blogIndex + 1) : parts).filter(Boolean);

    if (segments.length === 0) {
      root.posts.push(item);
      return;
    }

    // Last segment represents the post slug; preceding are directories
    const dirSegments = segments.slice(0, -1);

    let node = root;
    for (const seg of dirSegments) {
      let child = node.dirs.get(seg);
      if (!child) {
        child = {dirs: new Map(), posts: []};
        node.dirs.set(seg, child);
      }
      node = child;
    }
    node.posts.push(item);
  });

  return root;
}

function sortKeys<T>(map: Map<string, T>): string[] {
  return Array.from(map.keys()).sort((a, b) => a.localeCompare(b));
}

function titleCase(name: string): string {
  return name
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join(' ');
}

function RenderTree({
  node,
  depth,
  yearGroupHeadingClassName,
  ListComponent,
}: {
  node: TreeNode;
  depth: number;
  yearGroupHeadingClassName?: string;
  ListComponent: Props['ListComponent'];
}): ReactNode {
  const headingTag = ((): 'h3' | 'h4' | 'h5' | 'h6' => {
    if (depth <= 0) return 'h3';
    if (depth === 1) return 'h4';
    if (depth === 2) return 'h5';
    return 'h6';
  })();

  const dirNames = sortKeys(node.dirs);

  return (
    <>
      {/* Posts at this level */}
      {node.posts.length > 0 ? <ListComponent items={node.posts} /> : null}

      {/* Subdirectories */}
      {dirNames.map((dirName) => {
        const child = node.dirs.get(dirName)!;
        return (
          <div role="group" key={dirName}>
            <Heading as={headingTag} className={yearGroupHeadingClassName}>
              {titleCase(dirName)}
            </Heading>
            <RenderTree
              node={child}
              depth={depth + 1}
              yearGroupHeadingClassName={yearGroupHeadingClassName}
              ListComponent={ListComponent}
            />
          </div>
        );
      })}
    </>
  );
}

function BlogSidebarContent({
  items,
  yearGroupHeadingClassName,
  ListComponent,
}: Props): ReactNode {
  const tree = buildTree(items);
  return (
    <RenderTree
      node={tree}
      depth={0}
      yearGroupHeadingClassName={yearGroupHeadingClassName}
      ListComponent={ListComponent}
    />
  );
}

export default memo(BlogSidebarContent);
