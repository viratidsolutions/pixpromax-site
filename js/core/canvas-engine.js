// PIXPROMAX IMAGE ENGINE

class ImageEngine {

constructor() {
this.image = null
this.canvas = document.createElement("canvas")
this.ctx = this.canvas.getContext("2d")
}

/* Load image from upload */

load(file, callback) {

const reader = new FileReader()

reader.onload = (event) => {

this.image = new Image()

this.image.onload = () => {

this.canvas.width = this.image.width
this.canvas.height = this.image.height

this.ctx.drawImage(this.image, 0, 0)

if(callback) callback()

}

this.image.src = event.target.result

}

reader.readAsDataURL(file)

}


/* Resize image */

resize(width,height){

width = parseInt(width)
height = parseInt(height)

if(!width || !height){
alert("Enter valid width and height")
return
}

this.canvas.width = width
this.canvas.height = height

this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)

this.ctx.drawImage(this.image,0,0,width,height)

}


/* Compress image */

compress(quality = 0.8){

return this.canvas.toDataURL("image/jpeg", quality)

}


/* Convert format */

convert(format = "image/png", quality = 1){

return this.canvas.toDataURL(format, quality)

}


/* Download result */

download(filename = "pixpromax-image.png", format="image/png"){

const link = document.createElement("a")

link.download = filename
link.href = this.canvas.toDataURL(format)

link.click()

}

}
