export class User {
    public age: number;//age=数字
    public familyName: string;//文字
    public givenName: string;
    constructor (familyName: string, givenName: string, age: number) {//?
        this.age = age;
        this.familyName = familyName;
        this.givenName = givenName;
    }
}
// 型宣言