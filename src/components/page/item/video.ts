import { BaseComponent } from './../../component.js';

export class VideoComponent extends BaseComponent<HTMLElement> {
  constructor(title: string, url: string) {
    super(`<section class="video">
            <div class="video__player">
              <iframe src="" frameborder="0" class="video__iframe"></iframe>
              <h3 class="page-item__title video__title"></h3>
            </div>
          </section>`);
    
    const iframe = this.element.querySelector('.video__iframe')! as HTMLIFrameElement;
    iframe.src = this.convertToEmbeddedUrl(url) ; // url -> videoId
    iframe.title = title;
    const titleElement = this.element.querySelector('.video__title')! as HTMLHeadingElement;
    titleElement.textContent = title;
    console.log(url);
  }

  private convertToEmbeddedUrl(url: string): string {
    const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
    const match = url.match(regExp);

    const videoId = match ? match[1] || match[2] : undefined;
    if(videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  }
}

// <iframe 
//   width="942" 
//   height="530" 
//   src="https://www.youtube.com/embed/8U7bB7R1d78" 
//   title="[4K HDR nightlife] 미인들은 압구정로데오에🔥🔥🔥Seoul of korea, nightlife, gangnam night walk, 4k walk korea😎😎"
//   frameborder="0" 
//   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
//   allowfullscreen>
// </iframe>