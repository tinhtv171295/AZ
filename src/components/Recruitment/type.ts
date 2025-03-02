type IRecruitment = {
  id: number;
  jobTitle: string;
  department?: string;
  place: string;
  placeAddress: string;
  typeOfWork: "partTime" | "fullTime";
  salary: string | null;
  applicationStart: Date;
  applicationPeriod: Date;
  quantity: number;
  image?: string;
  content: string;
};

export default IRecruitment;
