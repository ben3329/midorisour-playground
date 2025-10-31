// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'animal_house_response.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$AnimalHouseResponse extends AnimalHouseResponse {
  @override
  final Pet pet;
  @override
  final Mammalia mammalia;

  factory _$AnimalHouseResponse(
          [void Function(AnimalHouseResponseBuilder)? updates]) =>
      (AnimalHouseResponseBuilder()..update(updates))._build();

  _$AnimalHouseResponse._({required this.pet, required this.mammalia})
      : super._();
  @override
  AnimalHouseResponse rebuild(
          void Function(AnimalHouseResponseBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AnimalHouseResponseBuilder toBuilder() =>
      AnimalHouseResponseBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is AnimalHouseResponse &&
        pet == other.pet &&
        mammalia == other.mammalia;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, pet.hashCode);
    _$hash = $jc(_$hash, mammalia.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'AnimalHouseResponse')
          ..add('pet', pet)
          ..add('mammalia', mammalia))
        .toString();
  }
}

class AnimalHouseResponseBuilder
    implements Builder<AnimalHouseResponse, AnimalHouseResponseBuilder> {
  _$AnimalHouseResponse? _$v;

  PetBuilder? _pet;
  PetBuilder get pet => _$this._pet ??= PetBuilder();
  set pet(PetBuilder? pet) => _$this._pet = pet;

  MammaliaBuilder? _mammalia;
  MammaliaBuilder get mammalia => _$this._mammalia ??= MammaliaBuilder();
  set mammalia(MammaliaBuilder? mammalia) => _$this._mammalia = mammalia;

  AnimalHouseResponseBuilder() {
    AnimalHouseResponse._defaults(this);
  }

  AnimalHouseResponseBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _pet = $v.pet.toBuilder();
      _mammalia = $v.mammalia.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(AnimalHouseResponse other) {
    _$v = other as _$AnimalHouseResponse;
  }

  @override
  void update(void Function(AnimalHouseResponseBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  AnimalHouseResponse build() => _build();

  _$AnimalHouseResponse _build() {
    _$AnimalHouseResponse _$result;
    try {
      _$result = _$v ??
          _$AnimalHouseResponse._(
            pet: pet.build(),
            mammalia: mammalia.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'pet';
        pet.build();
        _$failedField = 'mammalia';
        mammalia.build();
      } catch (e) {
        throw BuiltValueNestedFieldError(
            r'AnimalHouseResponse', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
