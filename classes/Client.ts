/**
 * dis.ts
 * Copyright (C) 2020  Logan Devine
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 * 
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 * If your software can interact with users remotely through a computer
 * network, you should also make sure that it provides a way for users to
 * get its source.  For example, if your program is a web application, its
 * interface could display a "Source" link that leads users to an archive
 * of the code.  There are many ways you could offer source, and different
 * solutions will be better for different programs; see section 13 for the
 * specific requirements.
 * 
 * You should also get your employer (if you work as a programmer) or school,
 * if any, to sign a "copyright disclaimer" for the program, if necessary.
 * For more information on this, and how to apply and follow the GNU AGPL, see
 * <https://www.gnu.org/licenses/>.
 * 
 * See LICENCE for more information.
 */

// Import interfaces/classes & modules
import { ClientOptions } from '../interfaces/index';

// Discord.js
import * as discord from 'discord.js';

// Main
export class Client {
    public constructor (options: ClientOptions) {
        let passedOptions: { [key: string]: any } = {};
        if (options.ws) {
            passedOptions.ws = {};
            if (options.ws.intents) {
                passedOptions.ws.intents = options.ws.intents;
            }
        }
        this.client = new discord.Client(passedOptions);
    }
    public client: discord.Client;
    public async login(token: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.client.login(token).then(() => {
                resolve();
            }).catch((e) => {
                reject(e);
            });
        });
    }
}