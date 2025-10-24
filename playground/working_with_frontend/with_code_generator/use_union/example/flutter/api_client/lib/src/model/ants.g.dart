// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'ants.dart';

// **************************************************************************
// BuiltValueGenerator
// **************************************************************************

class _$Ants extends Ants {
  @override
  final BuiltList<Ant> antList;

  factory _$Ants([void Function(AntsBuilder)? updates]) =>
      (AntsBuilder()..update(updates))._build();

  _$Ants._({required this.antList}) : super._();
  @override
  Ants rebuild(void Function(AntsBuilder) updates) =>
      (toBuilder()..update(updates)).build();

  @override
  AntsBuilder toBuilder() => AntsBuilder()..replace(this);

  @override
  bool operator ==(Object other) {
    if (identical(other, this)) return true;
    return other is Ants && antList == other.antList;
  }

  @override
  int get hashCode {
    var _$hash = 0;
    _$hash = $jc(_$hash, antList.hashCode);
    _$hash = $jf(_$hash);
    return _$hash;
  }

  @override
  String toString() {
    return (newBuiltValueToStringHelper(r'Ants')..add('antList', antList))
        .toString();
  }
}

class AntsBuilder implements Builder<Ants, AntsBuilder> {
  _$Ants? _$v;

  ListBuilder<Ant>? _antList;
  ListBuilder<Ant> get antList => _$this._antList ??= ListBuilder<Ant>();
  set antList(ListBuilder<Ant>? antList) => _$this._antList = antList;

  AntsBuilder() {
    Ants._defaults(this);
  }

  AntsBuilder get _$this {
    final $v = _$v;
    if ($v != null) {
      _antList = $v.antList.toBuilder();
      _$v = null;
    }
    return this;
  }

  @override
  void replace(Ants other) {
    _$v = other as _$Ants;
  }

  @override
  void update(void Function(AntsBuilder)? updates) {
    if (updates != null) updates(this);
  }

  @override
  Ants build() => _build();

  _$Ants _build() {
    _$Ants _$result;
    try {
      _$result = _$v ??
          _$Ants._(
            antList: antList.build(),
          );
    } catch (_) {
      late String _$failedField;
      try {
        _$failedField = 'antList';
        antList.build();
      } catch (e) {
        throw BuiltValueNestedFieldError(r'Ants', _$failedField, e.toString());
      }
      rethrow;
    }
    replace(_$result);
    return _$result;
  }
}

// ignore_for_file: deprecated_member_use_from_same_package,type=lint
