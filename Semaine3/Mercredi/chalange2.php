<?php

abstract class Employer {
    protected string $nom;
    protected  string $prenom;
    protected date $date_embauche;
    protected float $salaire_base;


    public function anciennete(){

        $dateEmbuche = new DateTime($this->date_embauche);
        $dateActuelle =  new DateTime();

       return $dateEmbuche->diff($dateActuelle)->y;
    }

    public abstract function calculerSalaire(); 

}


class Developpeur extends Employer {

    private float $bonus = 500;

    public function calculerSalaire(){

        $anciennete = $this->anciennete();
        $salaire = $this->salaire_base + ($anciennete * 500);
        if($anciennete > 5){
            $salaire += $salaire * 0.1;
        }
        return $salaire;
    }
}

class Commercial  extends Employer {
    private float $ca_mensuel;
    private  float $pourcentage;    

    public function calculerSalaire(){
        $salaire = $this->salaire_base + ($ca_mensuel * $pourcentage);

        return $salaire;
    }


}

class Manager extends Employer {
    private int $tailleEquipe;

    public function calculerSalaire(){
        
        $salaire = $this->salaire_base + ($this->tailleEquipe * 200);
        if($tailleEquipe > 10){
            $salaire += $salaire * 0.15;
        }
        return $salaire;
    }
}