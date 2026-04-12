<?php



abstract class Transport{

    protected string $nom;
    protected int $vitesse_max;
    protected int $capacitePassager;
    protected float $consomation;

    public function __construct($nom, $vitesse_max, $capacitePassager,$consomation){
        $this->nom = $nom;
        $this->vitesse_max = $vitesse_max;
        $this->capacitePassager = $capacitePassager;
        $this->consomation = $consomation;
        
    }

    public function tempsTrajet($distanceKm){

        $temp = $distanceKm / $this->vitesse_max;

         return $temp;
    }

    public abstract function calculerCoutTrajet($distanceKm);

}


class Voiture extends Transport {
    private float $carburent = 1.8;

    public function calculerCoutTrajet($distanceKm){

        $litrescnsommer = ($distanceKm / 100)* 7;

        $cout = $this->carburent * $litrescnsommer;

        return $cout;
    } 
}

class Traine extends Transport {

    private float $prixKwat = 0.15;

    public function calculerCoutTrajet($distanceKm){

        $kwConsome = ($distanceKm / 100) * 30;
        $coutTotal = $kwConsome * $this->prixKwat;

        return $coutTotal / $this->capacitePassager;

    }

}

class Avion extends Transport {

    private float $prixCarburant = 2.5;

    public function calculerCoutTrajet($distanceKm): float {

        $litres = ($distanceKm / 100) * 250;
        $coutTotal = $litres * $this->prixCarburant;

        return $coutTotal / $this->capacitePassager;
    }
}