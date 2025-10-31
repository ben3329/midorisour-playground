//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/ant.dart';
import 'package:built_collection/built_collection.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'ants.g.dart';

/// Ants
///
/// Properties:
/// * [antList] - List of Ant
@BuiltValue()
abstract class Ants implements Built<Ants, AntsBuilder> {
  /// List of Ant
  @BuiltValueField(wireName: r'ant_list')
  BuiltList<Ant> get antList;

  Ants._();

  factory Ants([void updates(AntsBuilder b)]) = _$Ants;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(AntsBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Ants> get serializer => _$AntsSerializer();
}

class _$AntsSerializer implements PrimitiveSerializer<Ants> {
  @override
  final Iterable<Type> types = const [Ants, _$Ants];

  @override
  final String wireName = r'Ants';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Ants object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'ant_list';
    yield serializers.serialize(
      object.antList,
      specifiedType: const FullType(BuiltList, [FullType(Ant)]),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    Ants object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required AntsBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'ant_list':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(BuiltList, [FullType(Ant)]),
          ) as BuiltList<Ant>;
          result.antList.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  Ants deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = AntsBuilder();
    final serializedList = (serialized as Iterable<Object?>).toList();
    final unhandled = <Object?>[];
    _deserializeProperties(
      serializers,
      serialized,
      specifiedType: specifiedType,
      serializedList: serializedList,
      unhandled: unhandled,
      result: result,
    );
    return result.build();
  }
}

