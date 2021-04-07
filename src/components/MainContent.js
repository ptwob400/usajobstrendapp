import Top10Keywords from './Top10Keywords.js'
import Top10Locations from './Top10Locations.js'
import Top10Fields from './Top10Fields.js'
import DropDownMenu from './DropDownMenu.js'

function MainContent() {
    return (<body className="Body">
        <section>
            <DropDownMenu />
            <Top10Keywords />
            <Top10Locations />
            <Top10Fields />
        </section>
    </body>)
}

export default MainContent;