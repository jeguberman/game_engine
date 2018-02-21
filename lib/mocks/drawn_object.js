export const mockRect = {
  dx: 50,
  dy: 150,
  width: 10,
  height: 16.18,


  draw: function(ctx){
    ctx.save();
    ctx.fillStyle = "white";
    ctx.fillRect (this.dx, this.dy,this.width,this.height);
    ctx.restore();
  }
};
