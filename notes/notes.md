# Where's Waldo - A photo tagging app

[ ] look into how to select an object from inside an image

- [HTML images image map](https://www.w3schools.com/html/html_images_imagemap.asp)
  [ ] select an image which will be used to find objects
- downloaded 1 from reddit

## photo tagging

### approach 1

- html usermap lets us click certain areas of an image
- get coordinate pixels
  flag image
  - 884, 75
  - 889, 71
  - 900, 68
  - 909, 66
  - 915, 63
  - 921, 60
  - 924, 75
  - 927, 82
  - 909, 89
  - 892, 97

### approach 2

- make the complete image clickable
- on click, get the coordinates where user clicked
- save the min and max percentage values that the image takes
- if the clicked coordinate lies inside the min and max values
  - then the image has been clicked
- else keep looking

lets take the flag as an example
min --> (45, 12)
max --> (47, 19)

## Components

### Header

the header component will contain the images the user needs to find
