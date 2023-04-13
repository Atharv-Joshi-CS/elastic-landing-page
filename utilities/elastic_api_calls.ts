import Contentstack from "contentstack";

const { API_KEY } = process.env;
const { DELIVERY_TOKEN } = process.env;
const { ENVIROMENT_NAME } = process.env;

const Stack = Contentstack.Stack({
  api_key: API_KEY!,
  delivery_token: DELIVERY_TOKEN!,
  environment: ENVIROMENT_NAME!,
  region: Contentstack.Region.US,
});

export const getEntries = async (contentTypeUid : string, entryUid : string, locale : string) => {
    try {
      const entry = Stack.ContentType(contentTypeUid).Entry(entryUid).language(locale);
      const result = await entry.toJSON().fetch();
      
      return result;
    } catch (error) {
      return null;
    }
  };