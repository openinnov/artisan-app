@extends('layouts.app')

@section('content')
<div class="container">
    <div class="card mb-3">
        <div class="card-header">{{ __('Bienvenue sur Kimia ! Recherchez votre artisan dès maintenant !') }}</div>

        <div class="card-body">
            @if (session('status'))
                <div class="alert alert-success" role="alert">
                    {{ session('status') }}
                </div>
            @endif
            
            <form class="row" method="get">
                <div class="col">
                    <label for="artisanInput" class="visually-hidden">Saisissez votre recherche</label>
                    <input name="artisanInput" class="form-control form-control-lg" type="text" id="artisanInput" placeholder="Rechercher un artisan">
                </div>
                <div class="col">
                    <label for="villeInput" class="visually-hidden">Saisissez votre lieu de recherche</label>
                    <input name="villeInput" class="form-control form-control-lg" type="text" id="villeInput" placeholder="Ex : Bordeaux">
                </div>
                <div class="col">
                    <button type="submit" class="btn btn-primary btn-lg mt-30" id="validationBtn">Rechercher</button>
                </div>
              </form>
        </div>
    </div>


    <div class="card">
        @guest
            <div class="card-header">{{ __('Voici les artisans correspondants à votre recherche') }}</div>
        @else
            <div class="card-header">{{ Auth::user()->name }}, {{ __('voici les artisans correspondants à votre recherche') }}</div>
        @endguest
        <div class="card-body">
            <div class="alert alert-warning" role="alert">
                Cette fonctionnalité n'a pas encore été développée.
            </div>
        </div>
    </div>

</div>
@endsection
@section('scripts')

<script type="application/javascript"> // your code </script>

@stop