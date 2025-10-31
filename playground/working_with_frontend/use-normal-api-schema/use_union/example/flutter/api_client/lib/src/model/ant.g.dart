// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'ant.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Ant extends Ant {
  @override
  final String name;
  @override
  final String antType;

  factory _$Ant([void Function(AntBuilder)? updates]) =>
      (AntBuilder()..update(updates))._build();

  _$Ant._({required this.name, required this.antType}) : super._();
  @override
  Ant rebuild(void Function(AntBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AntBuilder toBuilder() => AntBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Ant && name == other.name && antType == other.antType;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, name.hashCode);
    _$hash = $jc(_$hash, antType.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Ant')
          ..add('name', name)
          ..add('antType', antType))
        .toString();
  }
}

class AntBuilder implements Builder<Ant, AntBuilder> {
  _$Ant? _$v;

  String? _name;
  String? get name => _$this._name;
  set name(String? name) => _$this._name = name;

  String? _antType;
  String? get antType => _$this._antType;
  set antType(String? antType) => _$this._antType = antType;

  AntBuilder() {
    Ant._defaults(this);
  }

  AntBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _name = $v.name;
      _antType = $v.antType;
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Ant other) {
    _$v = other as _$Ant;
  }

  @override
  void update(void Function(AntBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Ant build() => _build();

  _$Ant _build() {
    final _$result = _$v ??
        _$Ant._(
          name: BuiltValueNullFieldError.checkNotNull(name, r'Ant', 'name'),
          antType:
              BuiltValueNullFieldError.checkNotNull(antType, r'Ant', 'antType'),
        );
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
