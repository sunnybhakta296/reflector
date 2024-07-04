import "reflect-metadata"

function myDecorator(metadata: string) {
  return function(target: any, privateKey: string) {
    Reflect.defineMetadata("firstdecorator", metadata, target, privateKey)
  }
 }

 class TestDecorate {
   @myDecorator("Testing for decorator see whats happens")
   myMethod() {}
 }

const metadata = Reflect.getMetadata("firstdecorator", TestDecorate.prototype, "myMethod")
const key = Reflect.getMetadataKeys(TestDecorate)

console.log(metadata, key)