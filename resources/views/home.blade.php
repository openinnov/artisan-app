@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card">
        <div class="card-header">{{ __('Bienvenue sur Kimia ! Recherchez votre artisan dès maintenant !') }}</div>

        <div class="card-body">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            

            <form class="row">
                <div class="col-auto">
                    <label for="artisanInput" class="visually-hidden">Saisissez votre recherche</label>
                    <input class="form-control form-control-lg" type="text" id="artisanInput" placeholder="Rechercher un artisan...">
                </div>
                <div class="col-auto">
                    <label for="villeInput" class="visually-hidden">Saisissez votre lieu de recherche</label>
                    <input class="form-control form-control-lg" type="text" id="villeInput" placeholder="Ex : Bordeaux">
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary btn-lg mt-30" id="validationBtn">Rechercher</button>
                </div>
              </form>
                
            
        </div>
    </div>
</div>
@endsection
