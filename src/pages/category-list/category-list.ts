import { CategoryListModel } from '../../assets/model/category-list.model';
import { ItemCategoriyModel } from '../../assets/model/category-master.model';
import { CategoryProvider } from '../../providers/category/category';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html',
})
export class CategoryListPage {

  categoryData: Array<ItemCategoriyModel>;
  shopByCate: Array<CategoryListModel>;
  pages: any = 0;
  cate: any;
  _id: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public categoryProvider: CategoryProvider) {

  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad CategoryListPage');
    this.getCate();
  }

  getCate() {
    this.categoryProvider.getCategory().then(res => {
      this.categoryData = res;
      this.cate = this.navParams.get('index');
      this._id = this.navParams.get('item')._id;
      setTimeout(() => {
        let scroll = document.getElementById('scroll');
        scroll.scrollLeft = 90 * this.cate;
      }, 0);
      console.log();
      this.getShopByCate();
    })
  }

  getShopByCate() {
    this.categoryProvider.getShopListByCategory(this._id).then(res => {
      this.shopByCate = res;
    });
  }

  onSelectedPage(index) { // selected category
    this.pages = index;
  }

  selectedCategory(index, item) {
    this.cate = index;
    this._id = item._id;
    this.getShopByCate();
  }

}
