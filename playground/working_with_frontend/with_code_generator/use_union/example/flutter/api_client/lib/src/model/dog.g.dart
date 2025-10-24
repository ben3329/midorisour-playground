// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'dog.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Dog extends Dog {
  @override
  final String name;
  @override
  final int barkVolume;

  factory _$Dog([void Function(DogBuilder)? updates]) =>
      (DogBuilder()..update(updates))._build();

  _$Dog._({required this.name, required this.barkVolume}) : super._();
  @override
  Dog rebuild(void Function(DogBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  DogBuilder toBuilder() => DogBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Dog && name == other.name && barkVolume == other.barkVolume;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, barkVolume.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Dog')
          ..add('name', name)
          ..add('barkVolume', barkVolume))
        .toString();
  }
}

class DogBuilder implements Builder<Dog, DogBuilder> {
  _$Dog? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  int? _barkVolume;
  int? get barkVolume => _$this._barkVolume;
  set barkVolume(int? barkVolume) => _$this._barkVolume = barkVolume;

  DogBuilder() {
    Dog._defaults(this);
  }

  DogBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _barkVolume = $v.barkVolume;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Dog other) {
    _$v = other as _$Dog;
  }

  @override
  void update(void Function(DogBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Dog build() => _build();

  _$Dog _build() {
    final _$result = _$v ??
        _$Dog._(
          name: BuiltValueNullFieldError.checkNotNull(name, r'Dog', 'name'),
          barkVolume: BuiltValueNullFieldError.checkNotNull(
              barkVolume, r'Dog', 'barkVolume'),
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
