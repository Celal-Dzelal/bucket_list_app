import ListItem from "./ListItem";

//* Bu interface, FullList sınıfının uygulaması gereken yöntemleri belirliyor
interface List {
  list: ListItem[]; //* ListItem nesnelerinden oluşan bir dizi sakla
  load(): void; //* localStorage'dan veri yükle
  save(): void; //* localStorage'a veri kaydet
  clearList(): void; //* Listeyi temizle
  addItem(itemObj: ListItem): void; //* Listeye yeni öge ekle
  removeItem(id: string): void; //* Belirli id'ye sahip ögeleri sil
}

//* FullList sınıfı todo listesini yönetir ve List interface'ini uygular
export default class FullList implements List {
  /*//! ------------------------ Singleton Tasarım Deseni ------------------------ */
  static instance: FullList = new FullList(); //* Sınıftan sadece tek bir örnek oluşturulmasını sağlar
  private constructor(private _list: ListItem[] = []) {} //* Dışarıdan new FullList() ile yeni bir nesne oluşturulamaz. Yalnızca FullList.instance kullanılabilir.
  get list(): ListItem[] {
    return this._list;
    //* _list değişkenini dışarıya sadece readonly olarak döndürür
  }

  load(): void {
    const storedList: string | null = localStorage.getItem("myList"); //* localStorage içinden myList adlı veriyi alır
    if (typeof storedList !== "string") return; //* Veri yoksa işlem yapmaz
    const parsedList: { _id: string; _item: string; _checked: boolean }[] =
      JSON.parse(storedList); //* JSON formatındaki listeyi parse eder

    parsedList.forEach((itemObj) => {
      const newListItem = new ListItem( //* Her ögeyi ListItem nesnesine çevirerek listeye ekler
        itemObj._id,
        itemObj._item,
        itemObj._checked
      );
      FullList.instance.addItem(newListItem);
    });
  }

  save(): void {
    //* _list dizisini JSON formatında localStorage içine kaydeder
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clearList(): void {
    this._list = []; //* _list dizisini sıfırlar
    this.save(); //* Değişikliği kaydetmek için save() metodunu çağırır
  }

  addItem(itemObj: ListItem): void {
    this._list.push(itemObj); //* Yeni ögeyi _list dizisine ekler
    this.save(); //* Listeyi localStorage içine kaydeder
  }

  removeItem(id: string): void {
    this._list = this._list.filter((item) => item.id !== id); //* id değeri eşleyemeyn ögeleri saklar.
    this.save(); //* Güncelleme için save() metodunu çağırır
  }
}
