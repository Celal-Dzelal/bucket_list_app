import FullList from "../Model/FullList";

interface DOMList {
  //* ListTemplate sınıfının sahip olması gereken HTML işlemleriyle ilgili metotları tanımlar
  ul: HTMLUListElement; //* Listeyi temsil eden <ul> HTML elemanı
  clear(): void; //* Liste içeriğini temizle
  render(fullList: FullList): void; //* Listeyi DOM'a çizer
}

export default class ListTemplate implements DOMList {
  ul: HTMLUListElement; //* todo listesini HTML'de görüntülemek için kullanılır. DOMList arayüzünü uygular.

  static instance: ListTemplate = new ListTemplate(); //* Singleton tasarım deseni

  private constructor() {
    this.ul = document.getElementById("listItems") as HTMLUListElement;
  }

  clear(): void {
    this.ul.innerHTML = ""; //* HTML içeriğini boş bir string yaparak ul içindeki tüm li ögelerini kaldırır ve listeyi temizler
  }

  render(fullList: FullList): void {
    this.clear(); //* listeyi sıfırla
    fullList.list.forEach((item) => {
      //* fullList.list üzerinde döngü çalıştırılır, her öge için bir <li> elemanı oluşturulur
      const li = document.createElement("li") as HTMLLIElement; //* Yeni bir <li> elemanı oluşturulur ve className olarak "item" atanır.
      li.className = "item";
      const check = document.createElement("input") as HTMLInputElement; //* Yeni bir input elemanı oluşturulur. type="checkbox" yapılarak onay kutusu haline getirilir. checked değeri true veya false olarak ayarlanır. <li> ögesine eklenir.
      check.type = "checkbox";
      check.id = item.id;
      check.tabIndex = 0;
      check.checked = item.checked;
      li.append(check);

      check.addEventListener("change", () => {
        //* Checkbox değiştiğinde, ögenin checked değeri tersine çevrilir ve değişiklik kaydedilir.
        item.checked = !item.checked;
        fullList.save();
      });

      const label = document.createElement("label") as HTMLLabelElement; //* Bir <label> elemanı oluşturulur. HTML'deki for özelliği ile checkbox ilişkilendirilir. Label içindeki ögenin ismi yazılır.
      label.htmlFor = item.id;
      label.textContent = item.item;
      li.append(label);

      const button = document.createElement("button") as HTMLButtonElement;
      //* <button> elemanı oluşturulur. Sınıfı button olarak atanır. Metin içeriği "x" olarak ayarlanır.
      button.className = "button";
      button.textContent = "X";
      li.append(button);

      button.addEventListener("click", () => {
        fullList.removeItem(item.id); //* Butona tıklanıldığında öge removeItem ile listeden siliniyor
        this.render(fullList); //* Sayfa güncellemesi için render() çağırılır
      });

      this.ul.append(li);
    });
  }
}
