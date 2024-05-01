import { PageContainer } from "@features/layout";
import { IssueList } from "@features/issues";

const IssuesPage = () => {
  return (
    <PageContainer
      title="Instructions"
      info="Overview of errors, warnings, and events logged from your projects."
    >
      <IssueList />
    </PageContainer>
  );
};



export default IssuesPage;
