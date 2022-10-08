<script lang="ts">
    import Button from "$lib/components/core/Button.svelte";
    import OrganizationAvatar from "./components/OrganizationAvatar.svelte";
    import Avatar from "$lib/components/core/Avatar.svelte";
</script>

<div class="bg-orange-500">
    <div class="max-w-[1200px] mx-auto px-8 py-32 text-white">
        <div class="max-w-[500px] text-center mb-14 mx-auto">
            <h1 class="text-4xl font-semibold">Support Flogram for growing fast together <i class="fa fa-leaf" /> </h1>

            <p>Our maintainers devote their time, effort, and heart to ensure Flogram keeps getting better and faster. Support us by donating to our collective 🙏</p>
        </div>

        <div class="max-w-[600px] mx-auto flex flex-col gap-6">
            <div class="flex flex-col md:flex-row p-6 bg-white text-gray-800 rounded-lg items-center gap-5">
                <div class="flex flex-1 items-center">
                    <svg viewBox="0 0 32 32" focusable="false" class="w-10 h-10 inline-block leading-4 shrink-0 text-current align-middle"><path fill-rule="evenodd" clip-rule="evenodd" d="M29.1531 6.8877C30.948 9.47379 31.9999 12.614 31.9999 16.0003C31.9999 19.3866 30.948 22.5271 29.1531 25.1129L25.0085 20.9684C25.8225 19.4957 26.2858 17.8019 26.2858 16.0003C26.2858 14.1987 25.8225 12.5052 25.0085 11.0325L29.1531 6.8877Z" fill="#8FC7FF"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M25.1126 2.84685L20.9678 6.99138C19.4951 6.17745 17.8016 5.71417 16 5.71417C10.3194 5.71417 5.71418 10.3194 5.71418 16C5.71418 21.6806 10.3194 26.2858 16 26.2858C17.8016 26.2858 19.4951 25.8226 20.9678 25.0086L25.1126 29.1532C22.5265 30.948 19.3863 32 16 32C7.16352 32 0 24.8365 0 16C0 7.16351 7.16352 0 16 0C19.3863 0 22.5265 1.05197 25.1126 2.84685Z" fill="#297EFF"></path></svg>
                    <div class="flex flex-col ml-6">
                        <span class="text-lg font-bold">Open Collective</span>
                        <span class="opacity-70">Sponsor the Flogram maintainers</span>
                    </div>
                </div>

                <Button colorScheme="orange">Sponsor</Button>
            </div>

            <div class="flex flex-col md:flex-row p-6 bg-white text-gray-800 rounded-lg items-center gap-5">
                <div class="flex flex-1 items-center">
                    <svg viewBox="0 0 569 546" focusable="false" class="w-10 h-10 inline-block leading-4 shrink-0 text-current align-middle"><g><circle cx="362.589996" cy="204.589996" r="204.589996" fill="#f96854"></circle><rect fill="#052d49" height="545.799988" width="100" x="0" y="0"></rect></g></svg>
                    <div class="flex flex-col ml-6">
                        <span class="text-lg font-bold">Open Patreon</span>
                        <span class="opacity-70">Sponsor the creator, Segun Adebayo</span>
                    </div>
                </div>

                <Button colorScheme="orange">Sponsor</Button>
            </div>
        </div>

        <div class="max-w-[600px] mx-auto text-center">
            <p class="uppercase mt-16 mb-8 font-bold">Sponsor Organizations <i class="fa fa-star" /> </p>

            <div class="grid grid-cols-4 md:grid-cols-6 gap-5">
                <OrganizationAvatar src="https://chakra-ui.com/avatars/51660.jpg?w=64&q=undefined" />
                <OrganizationAvatar src="https://chakra-ui.com/avatars/60721.jpg?w=64&q=undefined" />
                <OrganizationAvatar src="https://chakra-ui.com/avatars/77261.jpg?w=64&q=undefined" />
                <OrganizationAvatar src="https://chakra-ui.com/avatars/98173.jpg?w=64&q=undefined" />
                <OrganizationAvatar src="https://chakra-ui.com/avatars/105615.jpg?w=64&q=undefined" />
                <OrganizationAvatar src="https://chakra-ui.com/avatars/106171.jpg?w=64&q=undefined" />
                <OrganizationAvatar src="https://chakra-ui.com/avatars/107486.jpg?w=64&q=undefined" />
                <OrganizationAvatar src="https://chakra-ui.com/avatars/167894.jpg?w=64&q=undefined" />
            </div>
        </div>

        <div class="max-w-[600px] mx-auto text-center">
            <p class="uppercase mt-16 mb-8 font-bold">Sponsor Individuals <i class="fa fa-bolt" /> </p>

            <div class="grid grid-cols-6 md:grid-cols-12 gap-2">
                <Avatar src="https://avatars.githubusercontent.com/u/1498338?s=20?v=4" alt="" size="md" />
                <Avatar src="https://avatars.githubusercontent.com/u/11416855?s=20?v=4" alt="" size="md" />
                <Avatar src="https://avatars.githubusercontent.com/u/51176044?s=20?v=4" alt="" size="md" />
                <Avatar src="https://avatars.githubusercontent.com/u/104041595?s=20?v=4" alt="" size="md" />
            </div>
        </div>
    </div>
</div>