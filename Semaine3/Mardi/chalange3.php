<?php



class Bibliotheque {
    private array $livres;
    private array $emprunts;

    public function __construct(){
        $this->livres = [];
        $this->emprunts[] = [];
    }

    public function emprunter($titre, $emprunteur){
        $existe = false;
            for($i = 0; $i < count($this->livres); $i++){

                if($this->livres[$i]['titre'] === $titre){
                    $existe = true;
                    if($this->livres[$i]['disponible'] === true){
                        $this->emprunts[] = [
                            'livre'=> $titre,
                            'emprunteur'=> $emprunteur,
                            'date_emprunt' => date('Y-m-d'),
                            'date_retour_prevue' => date('Y-m-d', strtotime("+14 days")),
                            'date_retour_effectif'=> null,
                            'amende' => 0
                        ];
                        $this->livres[$i]['disponible'] = false;

                        return true;
                    }else{
                        echo "cette livre n'est pas disponibles";
                        return false;
                    }
                }
            }
        if($existe === false){
                echo "cette livre n'exist pas";
                return false;
            }
    }

    public function retouner($titre){
        $existe = false;
        for($i = 0; $i<count($this->emprunts);$i++){
           if($this->emprunts[$i]['livre'] === $titre){
                $existe = true;
                if($this->emprunts[$i]['date_retour_effectif'] == null){
                    $this->emprunts[$i]['date_retour_effectif'] = date('Y-m-d');

                    if(strtotime($this->emprunts[$i]['date_retour_effectif']) > strtotime($this->emprunts[$i]['date_retour_prevue'])){
                        $jourRetrad = (strtotime($this->emprunts[$i]['date_retour_effectif']) - strtotime($this->emprunts[$i]['date_retour_prevue']))/(60 * 60 *24);
                        $this->emprunts[$i]['amende'] = $jourRetrad * 0.5;
                     
                    }else{
                        $this->emprunts[$i]['amende'] = 0;
                    }

                    return true;
                }


           }
        }
        if(!$existe){
            echo "cette livres n'est pas existe";
            return false;
        }
    }

    public function getAmendes($emprunteur){
        $existe = false;
        $totalAmounde = 0;
        for($i = 0; $i < count($this->emprunts); $i++){
            if($this->emprunts[$i]['emprunteur'] == $emprunteur){
                $existe = true;
                $totalAmounde += $this->emprunts[$i]['amende'];
            }
        }
        if(!$existe){
            echo "cette emprunteur  n'est pas existe dans le tableaux des empruntes";
            return false;
        }

        return $totalAmounde;
    }

    public function getStatistiques(){

        $nbrLivresDisponible = 0;
        $nbLivresEmprunter = 0;
        $totalAmende = 0;
        for($i = 0; $i < count($this->livres); $i++){
            if($this->livres[$i]['disponible'] === true){
                $nbrLivresDisponible++;
            }else{
                $nbLivresEmprunter++;
            }
        }
        for($i=0; $i < count($this->emprunts); $i++){
            $totalAmende += $this->emprunts[$i]['amende'];
        }

        echo "les livres disponibles est ". $nbrLivresDisponible . "<br/>";
        echo "les lovres emprunter est ". $nbLivresEmprunter . "<br/>";
        echo "Le total des amendes est ". $totalAmende;  
    }
}
