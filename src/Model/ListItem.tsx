//* item interface ile bir nesnenin sahip olması gereken özellikler belirlendi.

export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

//* ListItem adlı bir sınıf tanımlandı. Bu sınıfa Item interface uygulandı.

export default class ListItem implements Item {
  //* constructor içinde private olarak değişkenler belirlendi. Bu değişkenlere dışarıdan doğrudan erişimde bulunulamaz. Getter ve setter metodlarının kullanılması gerekiyor.
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  //* get ile başlayanlar getter metodu, değişkenlerin değerini almak için kullanılıyor. set ile başlayanlar ise setter metodu, değişkenlerin değerini değiştirmek için kullanılıyor. Amaç değişkenleri kontrollü şekilde okumak ve değiştirmek.

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }

  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }

  set checked(checked: boolean) {
    this._checked = checked;
  }
}
