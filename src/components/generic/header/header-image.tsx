import classes from './header-image.module.css';

export default function HeaderImage() {
  return (
    <div className={classes.container}>
      <picture className={classes.image}>
        <source
          media="(min-resolution: 192dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_3000.h?ordering=explicit"
        />
        <source
          media="(min-resolution: 192dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_2560.h?ordering=explicit"
        />
        <source
          media="(min-resolution: 192dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 2) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_2048.h?ordering=explicit"
        />
        <source
          media="(min-resolution: 192dpi), (-webkit-min-device-pixel-ratio: 2)"
          srcSet="https://media-api.xogrp.com/images/e5298f4b-7930-4aa1-bcc1-a8727eb7a23a~rt_auto-rs_1536.h?ordering=explicit"
        />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1280px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_2250.h?ordering=explicit"
        />
        <source
          media="(min-resolution: 144dpi) and (min-width: 1024px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_1920.h?ordering=explicit"
        />
        <source
          media="(min-resolution: 144dpi) and (min-width: 768px),(-webkit-min-device-pixel-ratio: 1.5) and (min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_1536.h?ordering=explicit"
        />
        <source
          media="(min-resolution: 144dpi), (-webkit-min-device-pixel-ratio: 1.5)"
          srcSet="https://media-api.xogrp.com/images/e5298f4b-7930-4aa1-bcc1-a8727eb7a23a~rt_auto-rs_1152.h?ordering=explicit"
        />
        <source
          media="(min-width: 1280px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_1500.h?ordering=explicit"
        />
        <source
          media="(min-width: 1024px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_1280.h?ordering=explicit"
        />
        <source
          media="(min-width: 768px)"
          srcSet="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_1024.h?ordering=explicit"
        />
        <source srcSet="https://media-api.xogrp.com/images/e5298f4b-7930-4aa1-bcc1-a8727eb7a23a~rt_auto-rs_768.h?ordering=explicit" />
        <img
          loading="eager"
          src="https://media-api.xogrp.com/images/a0f045b3-4497-4258-8316-f4942f9446e5~rt_auto-rs_1024.h?ordering=explicit"
        />
      </picture>
    </div>
  );
}
