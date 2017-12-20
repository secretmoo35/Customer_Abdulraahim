import { CategoryListModel } from '../../assets/model/category-list.model';
import { ItemCategoriyModel } from '../../assets/model/category-master.model';
import { CategoryProvider } from '../../providers/category/category';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
      let cateId = this.navParams.get('item')._id;
      setTimeout(() => {
        let scroll = document.getElementById('scroll');
        scroll.scrollLeft = 90 * this.cate;
      }, 0);
      console.log(cateId);
      this.getShopByCate(cateId);
    })
  }

  getShopByCate(cateId) {
    this.categoryProvider.getListCategory().then(res => {
      this.shopByCate = res;
    });
  }

  onSelectedPage(index) { // selected category
    this.pages = index;
  }

  selectedCategory(index) {
    this.cate = index;
    this.getShopByCate(index);
  }

  getItems(e) {
    if (e.keyCode == 13) {
      let activeElement = <HTMLElement>document.activeElement;
      activeElement && activeElement.blur && activeElement.blur();
    }
  }

}
