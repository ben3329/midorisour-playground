// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'pet.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Pet extends Pet {
  @override
  final AnyOf anyOf;

  factory _$Pet([void Function(PetBuilder)? updates]) =>
      (PetBuilder()..update(updates))._build();

  _$Pet._({required this.anyOf}) : super._();
  @override
  Pet rebuild(void Function(PetBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  PetBuilder toBuilder() => PetBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Pet && anyOf == other.anyOf;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, anyOf.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Pet')..add('anyOf', anyOf))
        .toString();
  }
}

class PetBuilder implements Builder<Pet, PetBuilder> {
  _$Pet? _$v;

  AnyOf? _anyOf;
  AnyOf? get anyOf => _$this._anyOf;
  set anyOf(AnyOf? anyOf) => _$this._anyOf = anyOf;

  PetBuilder() {
    Pet._defaults(this);
  }

  PetBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _anyOf = $v.anyOf;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Pet other) {
    _$v = other as _$Pet;
  }

  @override
  void update(void Function(PetBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Pet build() => _build();

  _$Pet _build() {
    final _$result = _$v ??
        _$Pet._(
          anyOf: BuiltValueNullFieldError.checkNotNull(anyOf, r'Pet', 'anyOf'),
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
