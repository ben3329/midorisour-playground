// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'mammalia.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Mammalia extends Mammalia {
  @override
  final AnyOf anyOf;

  factory _$Mammalia([void Function(MammaliaBuilder)? updates]) =>
      (MammaliaBuilder()..update(updates))._build();

  _$Mammalia._({required this.anyOf}) : super._();
  @override
  Mammalia rebuild(void Function(MammaliaBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  MammaliaBuilder toBuilder() => MammaliaBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Mammalia && anyOf == other.anyOf;
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
    return (newBuiltValueToStringHelper(r'Mammalia')..add('anyOf', anyOf))
        .toString();
  }
}

class MammaliaBuilder implements Builder<Mammalia, MammaliaBuilder> {
  _$Mammalia? _$v;

  AnyOf? _anyOf;
  AnyOf? get anyOf => _$this._anyOf;
  set anyOf(AnyOf? anyOf) => _$this._anyOf = anyOf;

  MammaliaBuilder() {
    Mammalia._defaults(this);
  }

  MammaliaBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _anyOf = $v.anyOf;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Mammalia other) {
    _$v = other as _$Mammalia;
  }

  @override
  void update(void Function(MammaliaBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Mammalia build() => _build();

  _$Mammalia _build() {
    final _$result = _$v ??
        _$Mammalia._(
          anyOf: BuiltValueNullFieldError.checkNotNull(
              anyOf, r'Mammalia', 'anyOf'),
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
