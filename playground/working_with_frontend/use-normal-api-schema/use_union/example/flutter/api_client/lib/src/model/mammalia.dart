//
// AUTO-GENERATED FILE, DO NOT MODIFY!
//

// ignore_for_file: unused_element
import 'package:openapi/src/model/dog.dart';
import 'package:openapi/src/model/cat.dart';
import 'package:built_value/built_value.dart';
import 'package:built_value/serializer.dart';
import 'package:one_of/any_of.dart';

part 'mammalia.g.dart';

/// Mammalia
///
/// Properties:
/// * [name] 
/// * [meowVolume] 
/// * [barkVolume] 
@BuiltValue()
abstract class Mammalia implements Built<Mammalia, MammaliaBuilder> {
  /// Any Of [Cat], [Dog]
  AnyOf get anyOf;

  Mammalia._();

  factory Mammalia([void updates(MammaliaBuilder b)]) = _$Mammalia;

  @BuiltValueHook(initializeBuilder: true)
  static void _defaults(MammaliaBuilder b) => b;

  @BuiltValueSerializer(custom: true)
  static Serializer<Mammalia> get serializer => _$MammaliaSerializer();
}

class _$MammaliaSerializer implements PrimitiveSerializer<Mammalia> {
  @override
  final Iterable<Type> types = const [Mammalia, _$Mammalia];

  @override
  final String wireName = r'Mammalia';

  Iterable<Object?> _serializeProperties(
    Serializers serializers,
    Mammalia object, {
    FullType specifiedType = FullType.unspecified,
  }) sync* {
  }

  @override
  Object serialize(
    Serializers serializers,
    Mammalia object, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final anyOf = object.anyOf;
    return serializers.serialize(anyOf, specifiedType: FullType(AnyOf, anyOf.valueTypes.map((type) => FullType(type)).toList()))!;
  }

  @override
  Mammalia deserialize(
    Serializers serializers,
    Object serialized, {
    FullType specifiedType = FullType.unspecified,
  }) {
    final result = MammaliaBuilder();
    Object? anyOfDataSrc;
    final targetType = const FullType(AnyOf, [FullType(Cat), FullType(Dog), ]);
    anyOfDataSrc = serialized;
    result.anyOf = serializers.deserialize(anyOfDataSrc, specifiedType: targetType) as AnyOf;
    return result.build();
  }
}

