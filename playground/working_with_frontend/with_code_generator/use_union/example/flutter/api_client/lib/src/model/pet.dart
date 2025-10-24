//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/ant.dart';
import 'package:openapi/src/model/dog.dart';
import 'package:built_collection/built_collection.dart';
import 'package:openapi/src/model/ants.dart';
import 'package:openapi/src/model/cat.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';
import 'package:one_of/any_of.dart';

part 'pet.g.dart';

/// Pet
///
/// Properties:
/// * [name] 
/// * [meowVolume] 
/// * [barkVolume] 
/// * [antList] - List of Ant
@BuiltValue()
abstract class Pet implements Built<Pet, PetBuilder> {
  /// Any Of [Ants], [Cat], [Dog]
  AnyOf get anyOf;

  Pet._();

  factory Pet([void updates(PetBuilder b)]) = _$Pet;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(PetBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Pet> get serializer => _$PetSerializer();
}

class _$PetSerializer implements PrimitiveSerializer<Pet> {
  @override
  final Iterable<Type> types = const [Pet, _$Pet];

  @override
  final String wireName = r'Pet';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Pet object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
  }

  @override
  Object serialize(
    Serializers serializers,
    Pet object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final anyOf = object.anyOf;
    return serializers.serialize(anyOf, specifiedType: FullType(AnyOf, anyOf.valueTypes.map((type) => FullType(type)).toList()))!;
  }

  @override
  Pet deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = PetBuilder();
    Object? anyOfDataSrc;
    final targetType = const FullType(AnyOf, [FullType(Cat), FullType(Dog), FullType(Ants), ]);
    anyOfDataSrc = serialized;
    result.anyOf = serializers.deserialize(anyOfDataSrc, specifiedType: targetType) as AnyOf;
    return result.build();
  }
}

