import ContentAdminCPN from "./view-admin/ContentAdminCPN/ContentAdminCPN";
import ContentAppCPN from "./view-app/ContentAppCPN/ContentAppCPN";

const ContentCPN = () => {
    let admin = true;
    return ( 
        <>
            {admin ? <ContentAdminCPN /> : <ContentAppCPN/>}
        </>
     );
}
 
export default ContentCPN;