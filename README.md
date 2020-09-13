# Relaxing Waves

## What is it?

**_Give your website relaxing waves_**

Provide `relaxing waves` for your website.<br>
It is easy to add on your website and you can easily customize the background and color of the waves.

## How To Use

### 1. Download required files

To use `Relaxing Waves`, you need the following JavaScript and CSS files.

- [relaxingWaves.js](https://github.com/myConsciousness/relaxing-waves/blob/master/src/org/thinkit/web/js/relaxingWaves.js)
- [relaxing-waves.css](https://github.com/myConsciousness/relaxing-waves/blob/master/src/org/thinkit/web/css/relaxing-waves.css)

### 2. Import downloaded files on HTML

**_CSS_**

Add the following CSS import within the HTML head tag.<br>
Specify the path to the downloaded `relaxing-waves.css`.

```html
<head>
  <link rel="stylesheet" href="./path/to/relaxing-waves.css" />
</head>
```

**_JavaScript_**

Add the following JavaScript import within the HTML head tag, or at the bottom of body tag.<br>
Specify the path to the downloaded `relaxingWaves.js`.

```html
<script src="./path/to/relaxingWaves.js"></script>
```

### 3. Add container for Relaxing Waves

Add the following container to any location in the body tag where you want to place waves.<br>
When `relaxingWaves.js` loads, it adds wave elements to all `relaxing-waves-container` elements in the body tag.

> **_Note:_**<br>
> The class name of the container must be `relaxing-waves-container`.

```html
<body>
  <div class="relaxing-waves-container"></div>
</body>
```

## Advanced Options

You can change the background and color of waves to any color by adding the following attribute to an element with the class name `relaxing-waves-container`.

Provides a `wave-background` attribute to change the background color of a wave to any color, and a `wave-color` attribute to change the wave color to any color.

You can change the color to any color by specifying a `color code` for each attribute.

> **_Note:_**<br>
> The color code you specify does not have to start with #.<br>
> The background color of the wave can be specified with the `linear-gradient` function.

```html
<body>
  <div
    class="relaxing-waves-container"
    wave-background="c3dce8"
    wave-color="006994"
  ></div>
</body>
```

## License

```
Copyright 2020 Kato Shinya.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
in compliance with the License. You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License
is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied. See the License for the specific language governing permissions and limitations under
the License.
```

## More Information

`Relaxing Waves` was designed and implemented by Kato Shinya, who works as a freelance developer from Japan.

Regardless of the means or content of communication, I would love to hear from you if you have any questions or concerns. I do not check my email box very often so a response may be delayed, anyway thank you for your interest!

- [Creator Profile](https://github.com/myConsciousness)
- [License](https://github.com/myConsciousness/relaxing-waves/blob/master/LICENSE)
- [File a Bug](https://github.com/myConsciousness/relaxing-waves/issues)
