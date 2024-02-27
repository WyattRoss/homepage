use yew::prelude::*;
use yew_router::prelude::*;

mod home;
mod nav;

#[derive(Clone, PartialEq, Routable)]
enum Route {
    #[at("/")]
    Home,
    #[at("/about")]
    About,
    #[at("/projects")]
    Projects,
    #[at("/talk")]
    Contact,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html!{<home::HomePage/>}, //is this really the correct pattern?
        Route::About => todo!(),
        Route::Contact => todo!(),
        Route::Projects => todo!(),
        _ => todo!(),
    }
}

#[function_component(App)]
fn app() -> Html {
    html! {
        <BrowserRouter>
            <Switch<Route> render={switch}/>
        </BrowserRouter>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
