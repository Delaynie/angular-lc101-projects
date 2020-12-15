import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://lh3.googleusercontent.com/4sZPgtfyAiYfyQa8UCwhv9UzOKHVyF7Ljr_WMFHeD6aw_8MjLuYs2O4OZUUkBp9wmIo-gE8V8_18gbyqN24ZUw2h9g4AwWL7vT6f1BGBhPpPifGYenNcDS-PP9c-CL9usvMKlEvO6OmSl8RgVKVEl_Yntb25ztLpY9yxs7S_2kuz5sxJw4oBK3Xm4msvfB7qS3tD42Pr3v6FUR2Wo6wKmRLnbdy_5JnK2yy_CECNPlSJgTjI9XGJ3K57ddPUlST7mHTg26HZ3bEuSAintpCf_evjyhbIRWFV1hx0tGnyHSpzD4n3RLO5KlodiNIlvyqRr9jFx4KsTo58TRfrfvXUgfZ7A1ayED3wMwdjGPxlUr3uY6a-BLUQ0ZlhT8O6G3bFx5z1tW7sDC0ZCUlpWheWAxuYyyGx5RijmqZLiNjmlcT56WsjaicWGCh9f_g75cjdNjqKiN9nVirGNQmYIZGfAnFakSeGcs95vUccyc_TwbQbt8auNqpyi_i8UfGIM6jiUeQz9FS6jliwKeIIqFv0UNTtiQPAjpCx4ujxdMrf-dd29Bwx0Rg-G89QXsfXaazZam80SZTkTUbBpEWnyMoGW42PZG4dk_XkVI0ugCRmenbbhIMUKH6KuHbHiON851VHcUgTOAitTsw1iGpyKmvrY1davOg4A2TVUC_msubMQspeZ4Op41XaWoNXZE0=w750-h562-no?authuser=0';
  image3 = 'https://www.agencymabu.com/wp-content/uploads/2016/08/tommyboy-719742-560x344.jpg';

  constructor() { }

  ngOnInit() {
  }

}