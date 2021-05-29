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
                    <button type="submit" class="btn btn-pink-moon btn-lg mt-30" id="validationBtn">Rechercher</button>
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
            <div class="row">
                <div class="col">
                    <div class="container-fluid">
                        <header>
                          <div class="row d-none d-sm-flex p-1 bg-dark text-white">
                            <h5 class="col-sm p-1 text-center">Lun</h5>
                            <h5 class="col-sm p-1 text-center">Mar</h5>
                            <h5 class="col-sm p-1 text-center">Mer</h5>
                            <h5 class="col-sm p-1 text-center">Jeu</h5>
                            <h5 class="col-sm p-1 text-center">Ven</h5>
                            <h5 class="col-sm p-1 text-center">Sam</h5>
                            <h5 class="col-sm p-1 text-center">Dim</h5>
                          </div>
                        </header>
                        <div class="row border border-right-0 border-bottom-0">
                            <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                                <h5 class="row align-items-center">
                                  <span class="date col-1">29</span>
                                  <small class="col d-sm-none text-center text-muted">Wednesday</small>
                                  <span class="col-1"></span>
                                </h5>
                                <p class="d-sm-none">No events</p>
                              </div>
                              <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                                <h5 class="row align-items-center">
                                  <span class="date col-1">30</span>
                                  <small class="col d-sm-none text-center text-muted">Wednesday</small>
                                  <span class="col-1"></span>
                                </h5>
                                <p class="d-sm-none">No events</p>
                              </div>
                              <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                                <h5 class="row align-items-center">
                                  <span class="date col-1">31</span>
                                  <small class="col d-sm-none text-center text-muted">Wednesday</small>
                                  <span class="col-1"></span>
                                </h5>
                                <p class="d-sm-none">No events</p>
                              </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">1</span>
                              <small class="col d-sm-none text-center text-muted">Wednesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">2</span>
                              <small class="col d-sm-none text-center text-muted">Thursday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">3</span>
                              <small class="col d-sm-none text-center text-muted">Friday</small>
                              <span class="col-1"></span>
                            </h5>
                            <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-success text-white" title="Disponible">Disponible</a>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">4</span>
                              <small class="col d-sm-none text-center text-muted">Saturday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="w-100"></div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">5</span>
                              <small class="col d-sm-none text-center text-muted">Sunday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">6</span>
                              <small class="col d-sm-none text-center text-muted">Monday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">7</span>
                              <small class="col d-sm-none text-center text-muted">Tuesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">8</span>
                              <small class="col d-sm-none text-center text-muted">Wednesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-success text-white" title="Disponible">Disponible</a>
                            <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-success text-white" title="Disponible">Disponible</a>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">9</span>
                              <small class="col d-sm-none text-center text-muted">Thursday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">10</span>
                              <small class="col d-sm-none text-center text-muted">Friday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">11</span>
                              <small class="col d-sm-none text-center text-muted">Saturday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="w-100"></div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">12</span>
                              <small class="col d-sm-none text-center text-muted">Sunday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">13</span>
                              <small class="col d-sm-none text-center text-muted">Monday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">14</span>
                              <small class="col d-sm-none text-center text-muted">Tuesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">15</span>
                              <small class="col d-sm-none text-center text-muted">Wednesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">16</span>
                              <small class="col d-sm-none text-center text-muted">Thursday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">17</span>
                              <small class="col d-sm-none text-center text-muted">Friday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">18</span>
                              <small class="col d-sm-none text-center text-muted">Saturday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="w-100"></div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">19</span>
                              <small class="col d-sm-none text-center text-muted">Sunday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">20</span>
                              <small class="col d-sm-none text-center text-muted">Monday</small>
                              <span class="col-1"></span>
                            </h5>
                            <a class="event d-block p-1 pl-2 pr-2 mb-1 rounded text-truncate small bg-success text-white" title="Disponible">Disponible</a>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">21</span>
                              <small class="col d-sm-none text-center text-muted">Tuesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">22</span>
                              <small class="col d-sm-none text-center text-muted">Wednesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">23</span>
                              <small class="col d-sm-none text-center text-muted">Thursday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">24</span>
                              <small class="col d-sm-none text-center text-muted">Friday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">25</span>
                              <small class="col d-sm-none text-center text-muted">Saturday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="w-100"></div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">26</span>
                              <small class="col d-sm-none text-center text-muted">Sunday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">27</span>
                              <small class="col d-sm-none text-center text-muted">Monday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">28</span>
                              <small class="col d-sm-none text-center text-muted">Tuesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">29</span>
                              <small class="col d-sm-none text-center text-muted">Wednesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate ">
                            <h5 class="row align-items-center">
                              <span class="date col-1">30</span>
                              <small class="col d-sm-none text-center text-muted">Thursday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                            <h5 class="row align-items-center">
                              <span class="date col-1">1</span>
                              <small class="col d-sm-none text-center text-muted">Wednesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                          <div class="day col-sm p-2 border border-left-0 border-top-0 text-truncate d-none d-sm-inline-block bg-light text-muted">
                            <h5 class="row align-items-center">
                              <span class="date col-1">2</span>
                              <small class="col d-sm-none text-center text-muted">Wednesday</small>
                              <span class="col-1"></span>
                            </h5>
                            <p class="d-sm-none">No events</p>
                          </div>
                        </div>
                      </div>
                </div>
                <div class="col">
                    <iframe width="520" height="425" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=425&amp;hl=en&amp;q=%20Bordeaux+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
              </div>
        </div>
    </div>

</div>
@endsection