// Name       : Jemin.Shin
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Note
{
  constructor(X,Y,hide_speed,spawn)
  {
    this.X = X
    this.Y = Y
    this.hide_speed = hide_speed
    this.time = Timer
    this.spawn = spawn -1950
    this.Life = 30
  }  

  draw()
  {
    this.time =  Timer+ 1.666666 *10
    
      if(this.time > this.spawn )
      {
        if(this.Y < 720)
        {
          push()
          fill(50)
          rect(this.X * 80,this.Y,80,20)
          fill(255)
          rect(this.X *80 + 20,this.Y , 40,8)
          this.Y += this.hide_speed
          pop()
        }

      } 
    }
}