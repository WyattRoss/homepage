use yew::prelude::*;

#[function_component(HomePage)]
pub fn home_page() -> Html {
    html! {
        <div class="grid content-center bg-zinc-950 h-screen pl-3">
            <div>
                <p class="text-8xl noki text-zinc-50"> {"hi im wyatt"} </p>
            </div>
            <div class="pt-3 pb-1">
                <a href="/#/projects" class="text-zinc-50 noki hover:underline"> {"check out the stuff i do"} </a>
            </div>
            <div class="py-1">
                <a href="/#/about" class="text-zinc-50 noki hover:underline"> {"learn about me"} </a>
            </div>
            <div class="py-1">
                <a href="/#/talk" class="text-zinc-50 noki hover:underline"> {"get in touch"} </a>
            </div>
        </div>
    }
}
