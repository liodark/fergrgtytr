class Tabs {
constructor(node) {
    this.node = node;

    if (!this.node) return;

    this.onTabListItemClick = this.onTabListItemClick.bind(this);
    this.unsetActiveTab = this.unsetActiveTab.bind(this);

    this.tabList = this.node.querySelector(".tab__list");
    this.tabContentItems = this.node.querySelectorAll(".tab__content-item");

    this.tabList.addEventListener("click", this.onTabListItemClick, false);
}

  onTabListItemClick(event) {
    const item = event.target.closest(".tab__list-item");
    const index = [...this.tabList.children].indexOf(item);

    if (!item) return;

    this.unsetActiveTab();
    this.setActiveTab(item, index);
  }

  unsetActiveTab() {
    [...document.querySelectorAll(".tab__list-item")].forEach((node) =>
     node.classList.remove("tab__list-item_selected")
    );

    [...document.querySelectorAll(".tab__content-item")].forEach((node) =>
      node.classList.remove("tab__content-item_selected")
    );
  }

  setActiveTab(item, index) {
    item.classList.add("tab__list-item_selected");

    this.tabContentItems[index].classList.add("tab__content-item_selected");
  }
}

new Tabs(document.querySelector(".tab"));
