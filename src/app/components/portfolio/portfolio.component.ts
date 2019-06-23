import { Component, OnInit } from '@angular/core';
import { Lightbox, LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projectAlbum: any[] = [];
  constructor(
    private lightBox: Lightbox,
    private lightBoxConfig: LightboxConfig
  ) {
    lightBoxConfig.disableScrolling = true;
    lightBoxConfig.centerVertically = true;
    lightBoxConfig.fitImageInViewPort = true;

    for (let i = 1; i <= 6; i++) {
      const src = 'assets/images/portfolio/project' + i + '.png';
      // const caption = '';
      // const thumb = 'assets/images/project' + i + '-thumb.png';
      const album = {
        src: src
      };
      this.projectAlbum.push(album);
    }
  }

  ngOnInit() {
  }

  openLightbox(index: number) {
    this.lightBox.open(this.projectAlbum, index);
  }

  closeLightbox() {
    this.lightBox.close();
  }

}
