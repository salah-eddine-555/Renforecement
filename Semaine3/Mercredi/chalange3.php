<?php


abstract class  Article {

    protected string $reference;
    protected string $designation;
    protected float $prix_ht;

    
    
    public abstract function calculerPrixTTC();

    public function getPrix(){ return $this->prix_ht; }

}


class Produit extends Article{
    private float $tva = 0.2;

    public function calculerPrixTTC(){
          $prixTTC = $this->prix_ht + ($this->prix_ht * $this->tva);
        return $prixTTC;
    }
}

class Service extends Article{
    private float $tva = 0.1;

    public function calculerPrixTTC(){
        
        $prixTTC = $this->prix_ht + ($this->prix_ht * $this->tva);

        return $prixTTC;
    }
}

class Facture {
    private int $numero;
    private date $date;
    private string $client;
    private array $lignes = [];

    public function ajouterLigne(Article $article, $quantite){
        $this->lignes [] = [
            'article'=> $article,
            'quantite' => $quantite
        ];
    }

    public function calculerTotalHT(){
        $prixTotal = 0;
        for($i=0; $i < count($this->linges); $i++){
            $article = $this->lignes[$i]['article'];
            $quantite = $this->lignes[$i]['quantite'];
            $prixTotal += $article->getPrix() * $quantite;
        }
        return $prixTotal;
    }

    public function calculerTotalTva(){
        $totalTva = 0;

        for($i = 0; $i < count($this->lignes); $i++){
            $article = $this->lignes['article'];
            if($article instanceof Produit){
                
            }
        }
    }
}