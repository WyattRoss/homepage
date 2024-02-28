use url::Url;
use yew::prelude::*;

use crate::nav::BackButton;

#[derive(Debug, Properties, PartialEq)]
struct ProjectEntry {
    name: String,
    link: Option<Url>,
    description: String,
}

fn create_projects() -> Vec<ProjectEntry> { //maybe deserialize JSON or a DB later?
    vec![
        ProjectEntry {
            name: "EzASM".to_string(),
            link: Some(Url::parse("https://github.com/ezasm-org/EzASM").unwrap()),
            description: "write this later".to_string(),
        },
        ProjectEntry {
            name: "REzASM".to_string(),
            link: Some(Url::parse("https://github.com/ezasm-org/EzASM").unwrap()),
            description: "write this later (but in rust)".to_string(),
        },
    ]
}

fn project_display(entry: &ProjectEntry) -> Html {
    let title = match &entry.link {
        Some(link) => html! {
            <a href={link.to_string()} class="text-3xl text-zinc-50 underline noki" target="_blank"> {entry.name.clone()} </a>
        },
        None => html! {
            <p class="text-3xl text-zinc-50 underline noki"> {entry.name.clone()} </p>
        },
    };

    html! {
            <div class="w-3/5">
                {title}
                <p class="text-zinc-50 noki"> {entry.description.clone()} </p>
            </div>
    }
}

#[function_component(ProjectPage)]
pub fn project_page() -> Html {
    let projects = create_projects()
        .iter()
        .map(|p| project_display(p))
        .collect::<Html>();
    html! {
        <div class="h-full bg-zinc-950 flex flex-col">
            <div class="px-10 pt-10">
            <p class="text-zinc-50 noki text-6xl"> {"Projects"} </p>
                {projects}
            </div>
            <BackButton/>
        </div>
    }
}
