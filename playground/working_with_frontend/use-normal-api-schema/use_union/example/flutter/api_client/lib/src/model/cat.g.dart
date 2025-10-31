// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'cat.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Cat extends Cat {
  @override
  final String name;
  @override
  final int meowVolume;

  factory _$Cat([void Function(CatBuilder)? updates]) =>
      (CatBuilder()..update(updates))._build();

  _$Cat._({required this.name, required this.meowVolume}) : super._();
  @override
  Cat rebuild(void Function(CatBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  CatBuilder toBuilder() => CatBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Cat && name == other.name && meowVolume == other.meowVolume;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, meowVolume.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Cat')
          ..add('name', name)
          ..add('meowVolume', meowVolume))
        .toString();
  }
}

class CatBuilder implements Builder<Cat, CatBuilder> {
  _$Cat? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  int? _meowVolume;
  int? get meowVolume => _$this._meowVolume;
  set meowVolume(int? meowVolume) => _$this._meowVolume = meowVolume;

  CatBuilder() {
    Cat._defaults(this);
  }

  CatBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _meowVolume = $v.meowVolume;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Cat other) {
    _$v = other as _$Cat;
  }

  @override
  void update(void Function(CatBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Cat build() => _build();

  _$Cat _build() {
    final _$result = _$v ??
        _$Cat._(
          name: BuiltValueNullFieldError.checkNotNull(name, r'Cat', 'name'),
          meowVolume: BuiltValueNullFieldError.checkNotNull(
              meowVolume, r'Cat', 'meowVolume'),
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
