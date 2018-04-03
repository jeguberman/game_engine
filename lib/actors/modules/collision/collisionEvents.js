const responses = {
  fireball:{
    any:{
      action: rcvDmg()
    }
  },
  goomba:{
    bottom:{
      action: bounce()
    },
    sides:{
      action: rcvDmg()
    },
    top:{
      action: rcvDmg()
    }
  }
}
