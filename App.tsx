import { useState } from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';

import { Avatar, AvatarFallback, AvatarImage } from './components/Avatar';
import { Badge } from './components/Badge';
import { Button } from './components/Button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './components/Card';
import { Checkbox } from './components/Checkbox';
import { Input } from './components/Input';
import { Skeleton } from './components/Skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/Tabs';
import {
  ToastProvider,
  ToastVariant,
  useToast,
} from './components/ToastContext';
import './styles/globals.css';

export default function App() {
  const [inputText, onChangeText] = useState('');

  return (
    <ToastProvider position="top">
      <ScrollView className="bg-background flex-1 py-16 px-10">
        <Text className="mb-2 text-3xl underline text-primary">
          nativecn-ui
        </Text>
        <View className="flex gap-3">
          <View className="flex gap-2">
            <Text className="font-semibold text-xl text-primary">Avatar</Text>
            <View className="flex justify-center items-center flex-row gap-4">
              <Avatar className="h-14 w-14">
                <AvatarImage
                  source={{
                    uri: 'https://pbs.twimg.com/profile_images/1745949238519803904/ZHwM5B07_400x400.jpg',
                  }}
                />
                <AvatarFallback>CG</AvatarFallback>
              </Avatar>
              <Avatar className="h-14 w-14">
                <AvatarImage
                  source={{
                    uri: 'https://pbs.twimg.com/profile_images/1603610343905058816/PsPEWMOJ_400x400.jpg',
                  }}
                />
                <AvatarFallback>SS</AvatarFallback>
              </Avatar>
            </View>
          </View>
          <View className="flex gap-2">
            <Text className="font-semibold text-xl text-primary">Badge</Text>
            <View className="flex flex-row gap-2">
              <Badge label="Badge" />
              <Badge label="Badge" variant="secondary" />
              <Badge label="Badge" variant="destructive" />
              <Badge label="Badge" className="bg-amber-400 dark:bg-amber-600" />
              <Badge label="Badge" variant="success" />
            </View>
          </View>
          <View className="flex gap-2">
            <Text className="font-semibold text-xl text-primary">Button</Text>
            <View className="flex flex-row gap-3">
              <Button label="Button" onPress={() => Alert.alert('Pressed 1')} />
              <Button
                label="Button"
                variant="secondary"
                onPress={() => Alert.alert('Pressed 2')}
              />
              <Button
                label="Button"
                variant="destructive"
                onPress={() => Alert.alert('Pressed 3')}
              />
            </View>
          </View>
          <View className="flex gap-2">
            <Text className="font-semibold text-xl text-primary">Card</Text>
            <Card>
              <CardHeader>
                <CardTitle>Accelerate UI</CardTitle>
                <CardDescription>
                  Enter a new development experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Text className="text-base text-primary">
                  Sleek, easy to use components to build your next app faster.
                </Text>
              </CardContent>
              <CardFooter>
                <Text className="text-sm text-muted-foreground">
                  Inspired by shadcn/ui
                </Text>
              </CardFooter>
            </Card>
          </View>
          <View className="flex gap-2">
            <Text className="font-semibold text-xl text-primary">Checkbox</Text>
            <Checkbox label="Accept T&C" />
          </View>
          <View className="flex gap-2">
            <Text className="font-semibold text-xl text-primary">Input</Text>
            <View>
              <Input
                placeholder="Email"
                value={inputText}
                onChange={onChangeText}
              />
            </View>
          </View>
          <View className="flex gap-2">
            <Text className="font-semibold text-xl text-primary">Skeleton</Text>
            <View className="flex">
              <Skeleton classes="w-48 h-4 mb-1" />
              <Skeleton classes="w-60 h-4 mb-1" />
              <Skeleton classes="w-56 h-4 mb-1" />
              <Skeleton classes="w-36 h-4" />
            </View>
          </View>
          <View className="flex gap-2 mt-1">
            <Text className="font-semibold text-xl text-primary">Tabs</Text>
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger id="account" title="Account" />
                <TabsTrigger id="password" title="Password" />
              </TabsList>
              <TabsContent value="account">
                <Text className="text-primary">
                  Make changes to your account here.
                </Text>
              </TabsContent>
              <TabsContent value="password">
                <Text className="text-primary">Change your password here.</Text>
              </TabsContent>
            </Tabs>
          </View>
          {/* <View>
            <Text className="font-semibold text-xl dark:text-white">Toast</Text>
            <View className="flex mx-auto mb-32">
              <ExampleToast />
            </View>
          </View> */}
        </View>
      </ScrollView>
    </ToastProvider>
  );
}

function ExampleToast() {
  const { toast } = useToast();
  const variants: ToastVariant[] = [
    'default',
    'success',
    'destructive',
    'info',
  ];

  return (
    <Button
      label="Toast"
      onPress={() => {
        variants.forEach((variant, index) => {
          setTimeout(() => {
            toast(`${variant} toast`, variant, 3000, 'bottom', true);
          }, index * 1000);
        });
      }}
    />
  );
}
