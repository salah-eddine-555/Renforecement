<?php


class Distributeur {

    private array $produits;
    private float $casise; 

    public function __construct(array $produits){
        $this->produits = $produits;
    }
    public function afficherProduits(){
        forEach($this->produits as $p){
            echo "Nom : " .$p['nom'] ."</br>";
            echo "prix : " .$p['prix'] ."</br>";
            echo "stock : " .$p['stock'] ."</br>";
        }
    }


    public function acheterProduit($nomProduit, $montantInsere){

            forEach($this->produits as $p){
                if($p['nom'] === $nomProduit &&  $p['stock'] > 0){
                    if($montantInsere >= $p['prix']){
                        $p['stock'] --;
                        $this->casise += $p['prix'];
                        $monnaie = $montantInsere - $p['prix'];

                        return $monnaie;
                    }else{
                        echo "le monntant n'est pas suffisuante";
                    }
                }else{
                    echo "le produit introuvable";
                }
            }
    }

    public function remplir($nomProduit, $quantite){

     
        for($i = 0; i <count($this->produits); $i++){

            if($this->produits[i]['nom'] === $nomProduit){
                $this->produits[i]['stock'] += $quantite;
                return ;
            }

            echo "cette produit est introuvable";
        }
    }

    public function getRecette(){
        return $this->casise;
    }
}