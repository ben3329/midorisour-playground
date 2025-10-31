//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/pet.dart';
import 'package:openapi/src/model/mammalia.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';

part 'animal_house_response.g.dart';

/// AnimalHouseResponse
///
/// Properties:
/// * [pet] 
/// * [mammalia] 
@BuiltValue()
abstract class AnimalHouseResponse implements Built<AnimalHouseResponse, AnimalHouseResponseBuilder> {
  @BuiltValueField(wireName: r'pet')
  Pet get pet;

  @BuiltValueField(wireName: r'mammalia')
  Mammalia get mammalia;

  AnimalHouseResponse._();

  factory AnimalHouseResponse([void updates(AnimalHouseResponseBuilder b)]) = _$AnimalHouseResponse;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(AnimalHouseResponseBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<AnimalHouseResponse> get serializer => _$AnimalHouseResponseSerializer();
}

class _$AnimalHouseResponseSerializer implements PrimitiveSerializer<AnimalHouseResponse> {
  @override
  final Iterable<Type> types = const [AnimalHouseResponse, _$AnimalHouseResponse];

  @override
  final String wireName = r'AnimalHouseResponse';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    AnimalHouseResponse object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
    yield r'pet';
    yield serializers.serialize(
      object.pet,
      specifiedType: const FullType(Pet),
    );
    yield r'mammalia';
    yield serializers.serialize(
      object.mammalia,
      specifiedType: const FullType(Mammalia),
    );
  }

  @override
  Object serialize(
    Serializers serializers,
    AnimalHouseResponse object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    return _serializeProperties(serializers, object, specifiedType: specifiedType).toList();
  }

  void _deserializeProperties(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
    required List<Object?> serializedList,
    required AnimalHouseResponseBuilder result,
    required List<Object?> unhandled,
  }) {
    for (var i = 0; i < serializedList.length; i += 2) {
      final key = serializedList[i] as String;
      final value = serializedList[i + 1];
      switch (key) {
        case r'pet':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Pet),
          ) as Pet;
          result.pet.replace(valueDes);
          break;
        case r'mammalia':
          final valueDes = serializers.deserialize(
            value,
            specifiedType: const FullType(Mammalia),
          ) as Mammalia;
          result.mammalia.replace(valueDes);
          break;
        default:
          unhandled.add(key);
          unhandled.add(value);
          break;
      }
    }
  }

  @override
  AnimalHouseResponse deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = AnimalHouseResponseBuilder();
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

