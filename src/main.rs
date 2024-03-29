use yew::prelude::*;
use yew_router::prelude::*;

use crate::nav::RightNav;

mod home;
mod nav;
mod projects;
mod about;

#[derive(Clone, PartialEq, Routable)]
enum Route {
    #[at("/")]
    Home,
    #[at("/about")]
    About,
    #[at("/projects")]
    Projects,
    #[not_found]
    #[at("/404")]
    NotFound,
}

fn switch(routes: Route) -> Html {
    match routes {
        Route::Home => html! {<home::HomePage/>}, //is this really the correct pattern?
        Route::About => html! {<about::AboutMe/>},
        Route::Projects => html! {<projects::ProjectPage/>},
        _ => todo!(),
    }
}

#[function_component(App)]
fn app() -> Html {
    html! {
        <HashRouter>
            <div class="flex flex-row">
                <div class="flex-auto lg:w-11/12 sm:w-screen">
                    <Switch<Route> render={switch}/>
                </div>
                <RightNav/>
            </div>
        </HashRouter>
    }
}

fn main() {
    yew::Renderer::<App>::new().render();
}
