import Summary from "../Summary/Summary";
import StartTest from "../Start Test/StartTest";
import EnterDetails from "../Enter Details/EnterDetails";
import NotAccessible from "../Not Accessible/NotAccessible";
import WhoWeAre from "../Who We Are/WhoWeAre";
import Overview from "../Overview/Overview";
import Review from "../Review/Review";

const publicRoutes = [

	// { path: "/", component: Summary },
	// { path: "/enter-details", component: EnterDetails },
	// { path: "/start-test", component: StartTest },
	// { path: "/notaccessible", component: NotAccessible },
	// { path: "/whoweare", component: WhoWeAre },
	{ path: "/", component: Overview },
	// { path: "/review", component: Review },
	
];

export { publicRoutes };
