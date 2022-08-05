<?php

class Carro {

  public function __construct(public $carro = "")
  {
    $this->carro = $carro;
  }

  public function mostra() {
    prints($this->carro);
  }
}