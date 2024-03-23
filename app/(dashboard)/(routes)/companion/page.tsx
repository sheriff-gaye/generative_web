import prismadb from "@/lib/prismadb";
import { Categories } from "@/components/categories";
import { Companions } from "@/components/companions";
import { SearchInput } from "@/components/search-input";
import { getCategories } from "@/actions/get-category";
import { Button } from "@/components/ui/button";
import { checkSubscription } from "@/lib/subscription";
import { Wand2 } from "lucide-react";
import { SubscriptionButton } from "@/components/subscription-button";

interface RootPageProps {
  searchParams: {
    categoryId: string;
    name: string;
  };
}

const RootPage = async ({ searchParams }: RootPageProps) => {
  const data = await prismadb.companion.findMany({
    where: {
      categoryId: searchParams.categoryId,
      name: {
        contains: searchParams.name // Using contains for partial string matching
      }
    },
    orderBy: {
      createdAt: "desc"
    },
    include: {
      _count: {
        select: {
          messages: true
        }
      }
    }
  });

  const isPro = await checkSubscription();

  const categories = await getCategories();

  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
      <Categories data={categories} />
      <Companions data={data} />
      <div className="flex justify-center items-center">
        {isPro ? (
          <Button>
            <Wand2 className="w-4 h-4 ml-2" />
            Create New AI Companion
          </Button>
        ) : (
          <SubscriptionButton isPro={isPro} />
        )}
      </div>
    </div>
  );
};

export default RootPage;
