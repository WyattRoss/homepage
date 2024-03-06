use yew::prelude::*;
use yew_icons::{Icon, IconId};

#[function_component(RightNav)]
pub fn right_nav() -> Html {
    html! {
        <div class="flex-1 h-screen bg-zinc-950 content-end hidden sm:grid sticky top-0">
            <div class="grid place-content-center">
                <a href="https://github.com/wyattross" target="_blank">
                    <Icon icon_id={IconId::LucideGithub} width="75%" height="75%"/>
                </a>
            </div>

            <div class="grid py-5 place-content-center">
                <a href="https://www.linkedin.com/in/wyatt-ross2019/" target="_blank">
                    <Icon icon_id={IconId::LucideLinkedin} width="75%" height="75%"/>
                </a>
            </div>
        </div>
    }
}

#[function_component(BackButton)]
pub fn back_button() -> Html {
    html! {
        <div class="bg-zinc-950 absolute sticky bottom-0">
            <div class="w-screen bg-zinc-950 bottom-0 left-0 p-3">
                <a href="/#" class="text-zinc-50 noki hover:underline"> {"← or go back home"} </a>
            </div>
        </div>
    }
}
